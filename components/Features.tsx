import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      icon: "📚",
      title: "Play-Based Learning",
      description: "Children learn best through play. Our curriculum encourages exploration, creativity, and hands-on discovery.",
      color: "#48D1CC",
    },
    {
      icon: "🏠",
      title: "Home Environment",
      description: "A cozy, home-like setting provides comfort and security, helping children feel safe and ready to learn.",
      color: "#8ADDE6",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Small Group Sizes",
      description: "Individual attention ensures each child receives personalized care tailored to their unique needs.",
      color: "#EED7F0",
    },
    {
      icon: "🌱",
      title: "Outdoor Exploration",
      description: "Daily outdoor activities promote physical development and a love for nature and the environment.",
      color: "#4877AD",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="section-header">
          <h2>Why Families Choose Us</h2>
          <p>Discover the Millcreek difference in early childhood education</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 rounded-2xl p-6 md:p-8"
              style={{ borderTop: `4px solid ${feature.color}` }}
            >
              <CardHeader className="p-0 pb-4">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-navy/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}



