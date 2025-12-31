'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, CheckCircle2, Loader2 } from 'lucide-react';
import { submitTourBooking } from './actions';

type SubmitStatus = {
  type: 'success' | 'error' | null;
  message: string;
};

export default function TourBookingForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
    intent: 'tour_booking', // 🔥 explicit intent
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple guardrail: date & time should be paired
    if ((formData.preferredDate && !formData.preferredTime) ||
        (!formData.preferredDate && formData.preferredTime)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select both a preferred date and time for your visit.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await submitTourBooking(formData);

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'We’ll reach out shortly to confirm your tour.',
        });

        setFormData({
          parentName: '',
          email: '',
          phone: '',
          childAge: '',
          preferredDate: '',
          preferredTime: '',
          notes: '',
          intent: 'tour_booking',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Unable to submit your request. Please try again.',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again in a moment.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  /* ---------------- SUCCESS STATE ---------------- */
  if (submitStatus.type === 'success') {
    return (
      <Card className="border-0 shadow-soft bg-cream rounded-2xl">
        <CardContent className="p-8 md:p-10 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>

          <h3 className="text-2xl font-bold text-navy mb-3">
            Tour Request Received
          </h3>

          <p className="text-navy/70 mb-6 max-w-md mx-auto">
            Thank you for your interest in Mill Creek Childcare. We’ll contact you
            within 24 hours to confirm your visit.
          </p>

          <Button
            variant="outline"
            onClick={() => setSubmitStatus({ type: null, message: '' })}
          >
            Request Another Tour
          </Button>
        </CardContent>
      </Card>
    );
  }

  /* ---------------- FORM ---------------- */
  return (
    <Card className="border-0 shadow-soft bg-cream rounded-2xl">
      <CardHeader className="p-6 md:p-10 pb-0">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <CalendarDays className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-navy">
            Schedule Your Tour
          </CardTitle>
        </div>

        <p className="text-navy/70 max-w-xl">
          Choose a preferred date and time, and we’ll confirm your visit.
          Tours typically last 20–30 minutes.
        </p>
      </CardHeader>

      <CardContent className="p-6 md:p-10 pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {submitStatus.type === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
              {submitStatus.message}
            </div>
          )}

          {/* Parent Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="parentName" className="font-bold text-navy">
                Parent Full Name *
              </Label>
              <Input
                id="parentName"
                name="parentName"
                required
                disabled={isSubmitting}
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Jane Smith"
                className="h-12 rounded-xl border-2 border-secondary bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-bold text-navy">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                disabled={isSubmitting}
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="h-12 rounded-xl border-2 border-secondary bg-white"
              />
            </div>
          </div>

          {/* Phone & Age */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-bold text-navy">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                disabled={isSubmitting}
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                className="h-12 rounded-xl border-2 border-secondary bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="childAge" className="font-bold text-navy">
                Child’s Age Group
              </Label>
              <Select
                value={formData.childAge}
                onValueChange={(v) => handleSelectChange('childAge', v)}
                disabled={isSubmitting}
              >
                <SelectTrigger className="h-12 rounded-xl border-2 border-secondary bg-white">
                  <SelectValue placeholder="Select age group…" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="infant">Infant (6 weeks – 12 months)</SelectItem>
                  <SelectItem value="toddler">Toddler (1 – 3 years)</SelectItem>
                  <SelectItem value="preschool">Preschool (3 – 5 years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="preferredDate" className="font-bold text-navy">
                Preferred Tour Date
              </Label>
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                disabled={isSubmitting}
                value={formData.preferredDate}
                onChange={handleChange}
                className="h-12 rounded-xl border-2 border-secondary bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredTime" className="font-bold text-navy">
                Preferred Time
              </Label>
              <Select
                value={formData.preferredTime}
                onValueChange={(v) => handleSelectChange('preferredTime', v)}
                disabled={isSubmitting}
              >
                <SelectTrigger className="h-12 rounded-xl border-2 border-secondary bg-white">
                  <SelectValue placeholder="Select time…" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9:00–12:00)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (1:00–4:00)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes" className="font-bold text-navy">
              Notes or Questions
            </Label>
            <Textarea
              id="notes"
              name="notes"
              rows={4}
              disabled={isSubmitting}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Anything you'd like us to know before your visit?"
              className="rounded-xl border-2 border-secondary bg-white"
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending request…
              </>
            ) : (
              'Request Tour'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
