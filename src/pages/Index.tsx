import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, Sun, Heart, UtensilsCrossed } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";
import aboutImage from "@/assets/about-interior.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const highlights = [
  { icon: Leaf, title: "Fresh, Real Ingredients", desc: "Locally sourced herbs, vegetables, and olive oils — never frozen, never artificial." },
  { icon: Sun, title: "Peaceful Garden Ambience", desc: "Dine surrounded by lush greenery and warm, natural light." },
  { icon: Heart, title: "Fast & Friendly Service", desc: "Warm hospitality that makes every visit feel like coming home." },
];

const menuItems = [
  { name: "Bruschetta Trio", price: "₹320", desc: "Classic tomato, olive tapenade & roasted pepper" },
  { name: "Falafel & Hummus", price: "₹280", desc: "Crispy chickpea patties with creamy house hummus" },
  { name: "Paneer Sizzler", price: "₹420", desc: "Grilled cottage cheese with herb-infused veggies" },
  { name: "Fresh Fruit Coolers", price: "₹180", desc: "Seasonal fruits blended with mint & lime" },
];

const testimonials = [
  { name: "Priya S.", text: "The most beautiful vegetarian restaurant I've ever been to. The food is incredible." },
  { name: "Rahul M.", text: "A hidden gem! The ambience alone is worth the visit. The falafel is out of this world." },
  { name: "Ananya K.", text: "Perfect for a quiet lunch or a date night. Clean, fresh, and absolutely delicious." },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-heading text-2xl font-bold text-primary">🌿 Herbs & Olives</span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">About</a>
            <a href="#menu" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Menu</a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Reviews</a>
            <Button variant="hero" size="sm">Reserve a Table</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Fresh vegetarian Mediterranean food spread" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight"
          >
            Herbs & Olives
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/85 mb-10 leading-relaxed max-w-xl mx-auto"
          >
            A garden of flavors. Fresh, handcrafted vegetarian cuisine made with real ingredients and zero shortcuts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button variant="hero" size="lg" className="px-10 py-6 text-lg">
              View Menu
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <img
              src={aboutImage}
              alt="Plant-filled restaurant interior"
              loading="lazy"
              width={800}
              height={1000}
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={1}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              An Indoor Garden Experience
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Step into a calm, plant-filled space designed to slow you down. Herbs & Olives blends lush greenery, clean design, and peaceful energy to create the perfect escape from the city.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every dish is crafted with herbs grown in our own kitchen garden, olive oils sourced from small farms, and a deep respect for seasonal produce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-4xl font-heading font-bold text-foreground mb-16"
          >
            Why People Love Us
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-4xl font-heading font-bold text-foreground mb-4"
          >
            Signature Favorites
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.5}
            className="text-muted-foreground mb-16 text-lg"
          >
            A taste of what awaits you
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-6">
            {menuItems.map((dish, i) => (
              <motion.div
                key={dish.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                className="bg-card rounded-2xl p-6 text-left border border-border hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-heading font-semibold text-foreground">{dish.name}</h3>
                  <span className="text-accent font-bold font-body text-sm">{dish.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{dish.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-4xl font-heading font-bold text-foreground mb-16"
          >
            What Our Guests Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                className="bg-background rounded-2xl p-8 border border-border text-left"
              >
                <p className="text-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                <p className="text-primary font-semibold text-sm">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-primary text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Dine With Us?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Reserve your table or walk in — we'd love to have you.
          </p>
          <Button variant="outline" size="lg" className="rounded-full px-10 py-6 text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            Book a Table
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-heading text-xl font-bold text-primary">🌿 Herbs & Olives</span>
          <p className="text-muted-foreground text-sm">© 2026 Herbs & Olives. All rights reserved.</p>
          <div className="flex gap-6 text-muted-foreground text-sm">
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
