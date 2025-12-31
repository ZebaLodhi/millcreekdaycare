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
import { Send, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    program: '',
    message: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setLoading(false);
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

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      program: value,
    });
  };

  /* =========================
     SUCCESS STATE
     ========================= */
  if (submitted) {
    return (
      <Card className="border-0 bg-secondary/10 rounded-2xl">
        <CardContent className="p-8 md:p-10 text-center">
          <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-navy mb-2">
            Message Sent!
          </h3>
          <p className="text-navy/70 max-w-md mx-auto">
            Thank you for reaching out. We’ve received your message and will get
            back to you within one business day.
          </p>

          <p className="mt-6 text-sm text-navy/60">
            Looking to visit in person?
          </p>
          <Link
            href="/book-tour"
            className="inline-block mt-2 text-primary font-semibold underline"
          >
            Schedule a daycare tour →
          </Link>
        </CardContent>
      </Card>
    );
  }

  /* =========================
     FORM
     ========================= */
  return (
    <Card className="border-0 shadow-none bg-cream rounded-2xl">
      <CardHeader className="p-6 pb-0 sm:p-8 sm:pb-0 md:p-10 md:pb-0">
        <CardTitle className="text-2xl font-bold text-navy">
          Send Us a Message
        </CardTitle>
        <p className="text-sm text-navy/70 mt-1">
          Have a question? We’re happy to help.
        </p>
      </CardHeader>

      <CardContent className="p-6 sm:p-8 md:p-10 pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name + Email */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-sm font-semibold text-navy">
                Your Name *
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className="h-12 px-4 rounded-xl border-2 border-secondary focus:border-primary bg-white"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-sm font-semibold text-navy">
                Email Address *
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="h-12 px-4 rounded-xl border-2 border-secondary focus:border-primary bg-white"
              />
            </div>
          </div>

          {/* Phone + Child Age */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-sm font-semibold text-navy">
                Phone Number
              </Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                className="h-12 px-4 rounded-xl border-2 border-secondary focus:border-primary bg-white"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="childAge" className="text-sm font-semibold text-navy">
                Child’s Age
              </Label>
              <Input
                type="text"
                id="childAge"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                placeholder="e.g. 2 years"
                className="h-12 px-4 rounded-xl border-2 border-secondary focus:border-primary bg-white"
              />
            </div>
          </div>

          {/* Program */}
          <div className="space-y-1.5">
            <Label htmlFor="program" className="text-sm font-semibold text-navy">
              Program You’re Interested In
            </Label>
            <Select value={formData.program} onValueChange={handleSelectChange}>
              <SelectTrigger className="h-12 px-4 rounded-xl border-2 border-secondary focus:border-primary bg-white">
                <SelectValue placeholder="Not sure yet" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="infant">
                  Infant Care (6 weeks – 18 months)
                </SelectItem>
                <SelectItem value="toddler">
                  Toddler Program (18 months – 3 years)
                </SelectItem>
                <SelectItem value="preschool">
                  Preschool (3 – 5 years)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-sm font-semibold text-navy">
              Your Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us a little about your childcare needs or any questions you have…"
              className="px-4 py-3 rounded-xl border-2 border-secondary focus:border-primary bg-white resize-none"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Submit */}
          <Button
            type="submit"
            className="w-full h-12 text-base rounded-full"
            disabled={loading}
          >
            <Send className="mr-2 h-4 w-4" />
            {loading ? 'Sending…' : 'Send Message'}
          </Button>

          <p className="text-xs text-center text-navy/50">
            We respond within one business day.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
