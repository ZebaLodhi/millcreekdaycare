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
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    program: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  return (
    <Card className="border-0 shadow-none bg-cream rounded-2xl">
      <CardHeader className="p-8 pb-0 md:p-10 md:pb-0">
        <CardTitle className="text-2xl font-bold text-navy">Send Us a Message</CardTitle>
      </CardHeader>
      <CardContent className="p-8 md:p-10 pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-bold text-navy">
                Your Name *
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="h-12 px-5 rounded-xl border-2 border-secondary focus:border-primary bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-bold text-navy">
                Email Address *
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="h-12 px-5 rounded-xl border-2 border-secondary focus:border-primary bg-white"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-bold text-navy">
                Phone Number
              </Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                className="h-12 px-5 rounded-xl border-2 border-secondary focus:border-primary bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="childAge" className="text-sm font-bold text-navy">
                Child&apos;s Age
              </Label>
              <Input
                type="text"
                id="childAge"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                placeholder="e.g., 2 years"
                className="h-12 px-5 rounded-xl border-2 border-secondary focus:border-primary bg-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="program" className="text-sm font-bold text-navy">
              Program of Interest
            </Label>
            <Select value={formData.program} onValueChange={handleSelectChange}>
              <SelectTrigger className="h-12 px-5 rounded-xl border-2 border-secondary focus:border-primary bg-white">
                <SelectValue placeholder="Select a program..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="infant">Infant Care (6 weeks - 18 months)</SelectItem>
                <SelectItem value="toddler">Toddler Program (18 months - 3 years)</SelectItem>
                <SelectItem value="preschool">Preschool (3 - 5 years)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-bold text-navy">
              Your Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your childcare needs..."
              className="px-5 py-4 rounded-xl border-2 border-secondary focus:border-primary bg-white resize-y"
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}



