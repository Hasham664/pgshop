import {
  Package,
  KeyRound,
  CreditCard,
  User,
  Heart,
  Truck,
  ShoppingCart,
  Store,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const serviceCards = [
  {
    icon: Package,
    title: "Track Order",
  },
  {
    icon: KeyRound,
    title: "Reset Password",
  },
  {
    icon: CreditCard,
    title: "Payment Option",
  },
  {
    icon: User,
    title: "User & Account",
  },
  {
    icon: Heart,
    title: "Wishlist & Compare",
  },
  {
    icon: Truck,
    title: "Shipping & Billing",
  },
  {
    icon: ShoppingCart,
    title: "Shopping Cart & Wallet",
  },
  {
    icon: Store,
    title: "Sell on Clicon",
  },
];

const popularTopics = [
  "How do I return my item?",
  "What is Clicons Returns Policy?",
  "How long is the refund process?",
  "What are the 'Delivery Timelines'?",
  "What is 'Discover Your Daraz Campaign 2022'?",
  "What is the Voucher & Gift Offer in this Campaign?",
  "How to cancel Clicon Order",
  "Ask the Digital and Device Community",
  "How to change my shop name?",
];

const Contact = () => {
  return (
    <div className="Mycontainer px-4 py-12">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-12">
        What can we assist you with today?
      </h1>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {serviceCards.map((card, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2"
          >
            <div className="flex items-center gap-4">
              <card.icon className="h-6 w-6 text-primary" />
              <span className="font-medium">{card.title}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Popular Topics */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Popular Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {popularTopics.map((topic, index) => (
            <a
              key={index}
              href="#"
              className="text-primary hover:underline cursor-pointer"
            >
              {topic}
            </a>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold">Don't find your answer.</h2>
          <p className="text-xl">Contact with us</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Call Us */}
          <Card className="p-6">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-blue-50 p-4 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold">Call us now</h3>
              <p className="text-sm text-muted-foreground text-center">
                we are available online from 9:00 AM to 5:00 PM (GMT+5:45) Talk
                with us now
              </p>
              <p className="font-bold">+61 466 468 528</p>
              <Button className="w-full" variant="default">
                CALL NOW
              </Button>
            </div>
          </Card>

          {/* Email Us */}
          <Card className="p-6">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-green-50 p-4 rounded-full">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-bold">Email Us</h3>
              <p className="text-sm text-muted-foreground text-center">
                we are available online from 9:00 AM to 5:00 PM (GMT+5:45) Talk
                with us now
              </p>
              <p className="font-bold">Support@clicon.com</p>
              <Button className="w-full" variant="secondary">
                CONTACT US
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Where can I watch?</AccordionTrigger>
            <AccordionContent>
              Nibh quisque suscipit fermentum netus nulla cras porttitor euismod
              nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.
              Fermentum sulla crasper ttitor ismod nulla.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Where can I watch?</AccordionTrigger>
            <AccordionContent>
              Nibh quisque suscipit fermentum netus nulla cras porttitor euismod
              nulla.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Where can I watch?</AccordionTrigger>
            <AccordionContent>
              Nibh quisque suscipit fermentum netus nulla cras porttitor euismod
              nulla.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Where can I watch?</AccordionTrigger>
            <AccordionContent>
              Nibh quisque suscipit fermentum netus nulla cras porttitor euismod
              nulla.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Contact
