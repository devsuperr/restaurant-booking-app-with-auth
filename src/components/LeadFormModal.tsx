import { useEffect, useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { useLeads } from '@/lib/store';
import { useToast } from '@/components/ui/Toast';
import type { Lead, LeadSource, LeadStatus } from '@/lib/types';

const SOURCES: LeadSource[] = ['Website', 'Referral', 'LinkedIn', 'Cold Outreach', 'Event', 'Ads', 'Other'];
const STATUSES: LeadStatus[] = ['New', 'Contacted', 'Qualified', 'Proposal Sent', 'Won', 'Lost'];

interface Props {
  open: boolean;
  onClose: () => void;
  lead?: Lead;
  onSaved?: (lead: Lead) => void;
}

const blank = {
  name: '',
  email: '',
  phone: '',
  company: '',
  source: 'Website' as LeadSource,
  status: 'New' as LeadStatus,
  deal_value: 0,
  notes: '',
  next_followup_at: '',
};

export default function LeadFormModal({ open, onClose, lead, onSaved }: Props) {
  const { create, update } = useLeads();
  const toast = useToast();
  const [form, setForm] = useState(blank);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open && lead) {
      setForm({
        name: lead.name,
        email: lead.email,
        phone: lead.phone ?? '',
        company: lead.company,
        source: lead.source,
        status: lead.status,
        deal_value: lead.deal_value,
        notes: lead.notes ?? '',
        next_followup_at: lead.next_followup_at ? lead.next_followup_at.slice(0, 10) : '',
      });
    } else if (open) {
      setForm(blank);
    }
    setErrors({});
  }, [open, lead]);

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Valid email is required';
    if (!form.company.trim()) e.company = 'Company is required';
    if (form.deal_value < 0) e.deal_value = 'Must be ≥ 0';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSaving(true);
    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim() || undefined,
        company: form.company.trim(),
        source: form.source,
        status: form.status,
        deal_value: Number(form.deal_value) || 0,
        notes: form.notes.trim() || undefined,
        next_followup_at: form.next_followup_at ? new Date(form.next_followup_at).toISOString() : null,
        owner_id: 'usr_demo',
      };
      if (lead) {
        update(lead.id, payload);
        toast.success('Lead updated', `${payload.name} · ${payload.company}`);
        onSaved?.({ ...lead, ...payload, updated_at: new Date().toISOString() } as Lead);
      } else {
        const created = create(payload);
        toast.success('Lead created', `${created.name} · ${created.company}`);
        onSaved?.(created);
      }
      onClose();
    } catch {
      toast.error('Could not save lead', 'Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={lead ? 'Edit lead' : 'New lead'}
      description={lead ? 'Update the contact details and pipeline stage.' : 'Add a new contact to your pipeline.'}
      size="lg"
      footer={
        <>
          <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
          <button type="submit" form="lead-form" disabled={saving} className="btn-primary">
            {saving ? 'Saving…' : lead ? 'Save changes' : 'Create lead'}
          </button>
        </>
      }
    >
      <form id="lead-form" onSubmit={onSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-1">
          <label className="label">Full name</label>
          <input className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Sarah Chen" />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label className="label">Email</label>
          <input type="email" className="input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="sarah@acme.io" />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label className="label">Phone</label>
          <input className="input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+1 (415) 555-0100" />
        </div>
        <div>
          <label className="label">Company</label>
          <input className="input" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Acme Robotics" />
          {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company}</p>}
        </div>
        <div>
          <label className="label">Source</label>
          <select className="input" value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value as LeadSource })}>
            {SOURCES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="label">Status</label>
          <select className="input" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as LeadStatus })}>
            {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="label">Deal value (USD)</label>
          <input type="number" min={0} step={100} className="input" value={form.deal_value} onChange={(e) => setForm({ ...form, deal_value: Number(e.target.value) })} placeholder="12000" />
          {errors.deal_value && <p className="mt-1 text-xs text-red-600">{errors.deal_value}</p>}
        </div>
        <div>
          <label className="label">Next follow-up</label>
          <input type="date" className="input" value={form.next_followup_at} onChange={(e) => setForm({ ...form, next_followup_at: e.target.value })} />
        </div>
        <div className="md:col-span-2">
          <label className="label">Notes</label>
          <textarea
            className="input min-h-[88px] resize-y"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            placeholder="Context, pain points, budget signals…"
          />
        </div>
      </form>
    </Modal>
  );
}