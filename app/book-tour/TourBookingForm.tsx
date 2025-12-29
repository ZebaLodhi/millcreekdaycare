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

export default function TourBookingForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await submitTourBooking(formData);

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        // Reset form on success
        setFormData({
          parentName: '',
          email: '',
          phone: '',
          childAge: '',
          preferredDate: '',
          preferredTime: '',
          notes: '',
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  // Show success message after submission
  if (submitStatus.type === 'success') {
    return (
      <Card className="border-0 shadow-soft bg-cream rounded-2xl">
        <CardContent className="p-8 md:p-10 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-navy mb-4">
            Tour Request Submitted!
          </h3>
          <p className="text-navy/70 mb-6">{submitStatus.message}</p>
          <Button
            onClick={() => setSubmitStatus({ type: null, message: '' })}
            variant="outline"
          >
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-soft bg-cream rounded-2xl">
      <CardHeader className="p-8 pb-0 md:p-10 md:pb-0">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <CalendarDays className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-navy">
            Book Your Visit
          </CardTitle>
        </div>
        <p className="text-navy/70">
          Fill out the form below and we&apos;ll confirm your tour date within 24 hours.
        </p>
      </CardHeader>
      <CardContent className="p-8 md:p-10 pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Error message */}
          {submitStatus.type === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
              {submitStatus.message}
            </div>
          )}

          {/* Parent Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="parentName" className="text-sm font-bold text-navy">
                Parent Full Name <span className="text-primary">*</span>
              </Label>
              <Input
                type="text"
                id="parentName"
                name="parentName"
                required
                disabled={isSubmitting}
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Jane Smith"
                className="h-12 px-5 rounded-xl border-2 border-secondary focus:border-primary bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-bold text-navy">
                Email Address <span className="text-primary">*</span>
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                disabled={isSubmitting}
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="h-12 px-5 rounded-xl border-2 border-secondary focus:border-primary bg-white"
              />
            </div>
          </div>

          {/* Phone & Child Age */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-bold text-navy">
                Phone Number
              </Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                disabled={isSubmitting}
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                className="h-12 px-5 rounded-xl border-2 border-secondary focus:border-primary bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="childAge" className="text-sm font-bold text-navy">
                Child&apos;s Age Group
              </Label>
              <Select
                value={formData.childAge}
                onValueChange={(value) => handleSelectChange('childAge', value)}
                disabled={isSubmitting}
              >
                <SelectTrigger
                  id="childAge"
                  className="h-12 px-5 rounded-xl border-2 border-secondary focus:border-primary bg-white"
                >
                  <SelectValue placeholder="Select age group..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="infant">Infant (6 weeks - 12 months)</SelectItem>
                  <SelectItem value="toddler">Toddler (1 - 3 years)</SelectItem>
                  <SelectItem value="preschool">Preschool (3 - 5 years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Preferred Date & Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="preferredDate" className="text-sm font-bold text-navy">
                Preferred Tour Date
              </Label>
              <Input
                type="date"
                id="preferredDate"
                name="preferredDate"
                disabled={isSubmitting}
                value={formData.preferredDate}
                onChange={handleChange}
                className="h-12 px-5 rounded-xl border-2 border-secondary focus:border-primary bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredTime" className="text-sm font-bold text-navy">
                Preferred Time
              </Label>
              <Select
                value={formData.preferredTime}
                onValueChange={(value) => handleSelectChange('preferredTime', value)}
                disabled={isSubmitting}
              >
                <SelectTrigger
                  id="preferredTime"
                  className="h-12 px-5 rounded-xl border-2 border-secondary focus:border-primary bg-white"
                >
                  <SelectValue placeholder="Select time..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (1:00 PM - 4:00 PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-sm font-bold text-navy">
              Additional Notes or Questions
            </Label>
            <Textarea
              id="notes"
              name="notes"
              rows={4}
              disabled={isSubmitting}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any questions you'd like answered during your tour, or special considerations we should know about..."
              className="px-5 py-4 rounded-xl border-2 border-secondary focus:border-primary bg-white resize-y"
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
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
