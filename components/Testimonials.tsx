import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function Testimonials() {
  const testimonials = [
    {
      content: "Millcreek has been a blessing for our family. The loving environment and dedicated caregivers have helped our daughter blossom. She comes home excited to share everything she learned!",
      author: "Sarah M.",
      child: "Parent of Emma, 3",
      initials: "SM",
    },
    {
      content: "As first-time parents, we were nervous about childcare. The team at Millcreek made us feel completely at ease. They truly treat every child like family.",
      author: "James & Rebecca T.",
      child: "Parents of Liam, 18 months",
      initials: "JR",
    },
    {
      content: "The structured yet flexible approach has prepared our son perfectly for kindergarten. His confidence and social skills have grown tremendously!",
      author: "Maria L.",
      child: "Parent of Noah, 5",
      initials: "ML",
    },
  ];

  return (
    <section className="section bg-gradient-to-br from-primary to-navy">
      <div className="container-custom">
        <div className="section-header light">
          <h2>What Parents Say</h2>
          <p>Hear from families in our community</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft rounded-2xl">
              <CardContent className="p-8">
                <p className="text-navy/80 italic leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-secondary text-white font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <strong className="text-navy block">{testimonial.author}</strong>
                    <span className="text-navy/60 text-sm">{testimonial.child}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}



