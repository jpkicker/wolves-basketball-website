import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { collection, addDoc, getDocs, orderBy, query } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/config';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.div`
  animation: ${fadeInUp} 0.6s ease-out;
`;

const SectionTitle = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
  color: var(--navy);
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  span { font-size: 1.5rem; }
`;

const Card = styled.div`
  background: var(--white);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 2px solid var(--gold);
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--navy);
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  font-family: 'Barlow', sans-serif;
  font-size: 1rem;
  border: 2px solid var(--gray-200);
  border-radius: 8px;
  transition: border-color 0.2s ease;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--gold);
  }
`;

const UploadArea = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.5rem;
  border: 2px dashed ${props => props.$hasFile ? 'var(--gold)' : 'var(--gray-300)'};
  border-radius: 8px;
  background: ${props => props.$hasFile ? 'rgba(255, 215, 0, 0.05)' : 'var(--gray-100)'};
  cursor: pointer;
  transition: all 0.2s ease;
  grid-column: 1 / -1;

  &:hover {
    border-color: var(--gold);
    background: rgba(255, 215, 0, 0.05);
  }

  input { display: none; }
`;

const UploadIcon = styled.div`
  font-size: 2rem;
`;

const UploadText = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 0.9rem;
  color: ${props => props.$hasFile ? 'var(--navy)' : 'var(--gray-500)'};
  margin: 0;
  font-weight: ${props => props.$hasFile ? '600' : '400'};
  text-align: center;
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 1rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  letter-spacing: 2px;
  background: var(--navy);
  color: var(--gold);
  border: none;
  border-radius: 8px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.6 : 1};
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: var(--gold);
    color: var(--navy);
    transform: translateY(-2px);
  }
`;

const StatusMsg = styled.div`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  font-size: 0.95rem;
  background: ${props => props.$error ? '#ffeaea' : '#eafff2'};
  color: ${props => props.$error ? '#c0392b' : '#1e7e34'};
  border: 1px solid ${props => props.$error ? '#f5c6cb' : '#b8dfc5'};
`;

// Receipt log styles
const LogTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.4rem;
  color: var(--navy);
  letter-spacing: 1px;
  margin: 2rem 0 1rem;
`;

const ReceiptTable = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1fr 0.8fr 0.8fr;
  background: var(--navy);
  padding: 0.75rem 1rem;
  gap: 0.5rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

const TableHeaderCell = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1fr 0.8fr 0.8fr;
  padding: 0.9rem 1rem;
  gap: 0.5rem;
  background: ${props => props.$alt ? 'var(--gray-100)' : 'var(--white)'};
  border-bottom: 1px solid var(--gray-200);
  align-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
`;

const TableCell = styled.div`
  font-family: 'Barlow', sans-serif;
  font-size: 0.9rem;
  color: var(--gray-700);
  word-break: break-word;
`;

const AmountCell = styled(TableCell)`
  font-weight: 700;
  color: var(--navy);
`;

const ViewLink = styled.a`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--navy);
  text-decoration: none;
  padding: 0.3rem 0.75rem;
  border: 2px solid var(--gold);
  border-radius: 4px;
  transition: all 0.2s ease;
  display: inline-block;

  &:hover {
    background: var(--gold);
    color: var(--navy);
  }
`;

const TotalBar = styled.div`
  background: var(--navy);
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 10px 10px;
`;

const TotalLabel = styled.span`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
`;

const TotalAmount = styled.span`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  color: var(--gold);
`;

const EmptyState = styled.div`
  padding: 2rem;
  text-align: center;
  font-family: 'Barlow', sans-serif;
  font-size: 0.95rem;
  color: var(--gray-500);
  background: var(--white);
  border-radius: 10px;
`;

const ReceiptSubmission = () => {
  const [form, setForm] = useState({ eventName: '', vendorName: '', amount: '' });
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [receipts, setReceipts] = useState([]);
  const [loadingReceipts, setLoadingReceipts] = useState(true);

  const loadReceipts = async () => {
    if (!db) return;
    try {
      const q = query(collection(db, 'receipts'), orderBy('submittedAt', 'desc'));
      const snap = await getDocs(q);
      setReceipts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (e) {
      console.error('Error loading receipts:', e);
    } finally {
      setLoadingReceipts(false);
    }
  };

  useEffect(() => {
    loadReceipts();
  }, []);

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleFile = (e) => {
    const f = e.target.files[0];
    if (f) setFile(f);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.eventName || !form.vendorName || !form.amount) {
      setStatus({ error: true, msg: 'Please fill in all fields.' });
      return;
    }
    if (!file) {
      setStatus({ error: true, msg: 'Please attach a receipt image.' });
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      // Upload image to Firebase Storage
      const fileName = `receipts/${Date.now()}_${file.name}`;
      const storageRef = ref(storage, fileName);
      await uploadBytes(storageRef, file);
      const imageUrl = await getDownloadURL(storageRef);

      // Save record to Firestore
      await addDoc(collection(db, 'receipts'), {
        eventName: form.eventName,
        vendorName: form.vendorName,
        amount: parseFloat(form.amount),
        imageUrl,
        fileName: file.name,
        submittedAt: new Date().toISOString(),
      });

      setStatus({ error: false, msg: `✅ Receipt submitted! $${parseFloat(form.amount).toFixed(2)} from ${form.vendorName} logged.` });
      setForm({ eventName: '', vendorName: '', amount: '' });
      setFile(null);
      loadReceipts();
    } catch (err) {
      console.error(err);
      setStatus({ error: true, msg: 'Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const total = receipts.reduce((sum, r) => sum + (parseFloat(r.amount) || 0), 0);

  const formatDate = (iso) => {
    try {
      return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch { return '—'; }
  };

  return (
    <Section>
      <SectionTitle><span>🧾</span> RECEIPT SUBMISSION</SectionTitle>

      <Card>
        <form onSubmit={handleSubmit}>
          <FormGrid>
            <FieldGroup>
              <Label htmlFor="eventName">Event Name</Label>
              <Input
                id="eventName"
                name="eventName"
                type="text"
                placeholder="e.g. Conrad P. Foss Memorial"
                value={form.eventName}
                onChange={handleChange}
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="vendorName">Vendor Name</Label>
              <Input
                id="vendorName"
                name="vendorName"
                type="text"
                placeholder="e.g. McDonald's, Chick-fil-A"
                value={form.vendorName}
                onChange={handleChange}
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="amount">Amount ($)</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                value={form.amount}
                onChange={handleChange}
              />
            </FieldGroup>

            <UploadArea $hasFile={!!file}>
              <input type="file" accept="image/*,application/pdf" onChange={handleFile} />
              <UploadIcon>{file ? '📎' : '📷'}</UploadIcon>
              <UploadText $hasFile={!!file}>
                {file ? file.name : 'Tap to upload receipt photo or PDF'}
              </UploadText>
            </UploadArea>
          </FormGrid>

          <SubmitBtn type="submit" disabled={submitting}>
            {submitting ? 'SUBMITTING...' : 'SUBMIT RECEIPT'}
          </SubmitBtn>
        </form>

        {status && <StatusMsg $error={status.error}>{status.msg}</StatusMsg>}
      </Card>

      {/* Receipt Log */}
      <LogTitle>Submitted Receipts</LogTitle>
      {loadingReceipts ? (
        <EmptyState>Loading receipts...</EmptyState>
      ) : receipts.length === 0 ? (
        <EmptyState>No receipts submitted yet.</EmptyState>
      ) : (
        <ReceiptTable>
          <TableHeader>
            <TableHeaderCell>Event</TableHeaderCell>
            <TableHeaderCell>Vendor</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Receipt</TableHeaderCell>
          </TableHeader>
          {receipts.map((r, i) => (
            <TableRow key={r.id} $alt={i % 2 === 1}>
              <TableCell>{r.eventName}</TableCell>
              <TableCell>{r.vendorName}</TableCell>
              <TableCell>{formatDate(r.submittedAt)}</TableCell>
              <AmountCell>${parseFloat(r.amount).toFixed(2)}</AmountCell>
              <TableCell>
                <ViewLink href={r.imageUrl} target="_blank" rel="noopener noreferrer">View</ViewLink>
              </TableCell>
            </TableRow>
          ))}
          <TotalBar>
            <TotalLabel>Total Pending Reimbursement</TotalLabel>
            <TotalAmount>${total.toFixed(2)}</TotalAmount>
          </TotalBar>
        </ReceiptTable>
      )}
    </Section>
  );
};

export default ReceiptSubmission;
