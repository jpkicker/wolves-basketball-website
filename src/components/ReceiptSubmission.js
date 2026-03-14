import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://smamtkqlkuqkztorjemr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtYW10a3Fsa3Vxa3p0b3JqZW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNTc1NDksImV4cCI6MjA4MjkzMzU0OX0.DTl9x0qzm8bmCJgINfVtUv8Sv4Kpr5fgf6fC_lsdWh0'
);

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

const Select = styled.select`
  padding: 0.75rem 1rem;
  font-family: 'Barlow', sans-serif;
  font-size: 1rem;
  border: 2px solid var(--gray-200);
  border-radius: 8px;
  transition: border-color 0.2s ease;
  width: 100%;
  box-sizing: border-box;
  background: white;
  cursor: pointer;
  appearance: auto;

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
  grid-template-columns: 1.2fr 1.4fr 1.2fr 1fr 0.8fr 0.7fr;
  background: var(--navy);
  padding: 0.75rem 1rem;
  gap: 0.5rem;

  @media (max-width: 700px) {
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
  grid-template-columns: 1.2fr 1.4fr 1.2fr 1fr 0.8fr 0.7fr;
  padding: 0.9rem 1rem;
  gap: 0.5rem;
  background: ${props => props.$alt ? 'var(--gray-100)' : 'var(--white)'};
  border-bottom: 1px solid var(--gray-200);
  align-items: center;

  @media (max-width: 700px) {
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
  const [form, setForm] = useState({ submittedBy: '', eventName: '', vendorName: '', amount: '', expenseType: '' });
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [receipts, setReceipts] = useState([]);
  const [loadingReceipts, setLoadingReceipts] = useState(true);

  const loadReceipts = async () => {
    const { data, error } = await supabase
      .from('wolf_receipts')
      .select('*')
      .order('submitted_at', { ascending: false });

    if (!error) setReceipts(data || []);
    setLoadingReceipts(false);
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
    if (!form.submittedBy || !form.eventName || !form.vendorName || !form.amount) {
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
      // Upload to Supabase Storage
      const ext = file.name.split('.').pop();
      const filePath = `receipts/${Date.now()}.${ext}`;
      const { error: uploadError } = await supabase.storage
        .from('wolves')
        .upload(filePath, file, { upsert: false });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from('wolves')
        .getPublicUrl(filePath);

      // Save record to DB
      const { error: dbError } = await supabase
        .from('wolf_receipts')
        .insert({
          submitted_by: form.submittedBy,
          event_name: form.eventName,
          vendor_name: form.vendorName,
          expense_type: form.expenseType,
          amount: parseFloat(form.amount),
          image_url: urlData.publicUrl,
          file_name: file.name,
          submitted_at: new Date().toISOString(),
        });

      if (dbError) throw dbError;

      setStatus({ error: false, msg: `✅ Receipt submitted! $${parseFloat(form.amount).toFixed(2)} from ${form.vendorName} logged.` });
      setForm({ submittedBy: '', eventName: '', vendorName: '', amount: '', expenseType: '' });
      setFile(null);
      loadReceipts();
    } catch (err) {
      console.error(err);
      setStatus({ error: true, msg: `Error: ${err.message || 'Something went wrong. Please try again.'}` });
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
              <Label htmlFor="submittedBy">Your Name</Label>
              <Select
                id="submittedBy"
                name="submittedBy"
                value={form.submittedBy}
                onChange={handleChange}
              >
                <option value="">— Select your name —</option>
                <option value="Elijah Balcarcel">Elijah Balcarcel</option>
                <option value="Julio Balcarcel">Julio Balcarcel</option>
                <option value="Emma Snelgrove">Emma Snelgrove</option>
                <option value="Jason Ranney">Jason Ranney</option>
              </Select>
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="expenseType">Expense Type</Label>
              <Input
                id="expenseType"
                name="expenseType"
                type="text"
                list="expenseTypes"
                placeholder="Food, Lodging, Transportation..."
                value={form.expenseType}
                onChange={handleChange}
              />
              <datalist id="expenseTypes">
                <option value="Food" />
                <option value="Lodging" />
                <option value="Transportation" />
                <option value="Supplies" />
                <option value="Entry Fee" />
                <option value="Equipment" />
              </datalist>
            </FieldGroup>

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

      <LogTitle>Submitted Receipts</LogTitle>
      {loadingReceipts ? (
        <EmptyState>Loading receipts...</EmptyState>
      ) : receipts.length === 0 ? (
        <EmptyState>No receipts submitted yet.</EmptyState>
      ) : (
        <ReceiptTable>
          <TableHeader>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Event</TableHeaderCell>
            <TableHeaderCell>Vendor</TableHeaderCell>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Receipt</TableHeaderCell>
          </TableHeader>
          {receipts.map((r, i) => (
            <TableRow key={r.id} $alt={i % 2 === 1}>
              <TableCell>{r.submitted_by}</TableCell>
              <TableCell>{r.event_name}</TableCell>
              <TableCell>{r.vendor_name}</TableCell>
              <TableCell>{r.expense_type || '—'}</TableCell>
              <AmountCell>${parseFloat(r.amount).toFixed(2)}</AmountCell>
              <TableCell>
                <ViewLink href={r.image_url} target="_blank" rel="noopener noreferrer">View</ViewLink>
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
