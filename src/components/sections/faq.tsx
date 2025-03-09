import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
    { question: "What is this platform about?", answer: "Our platform provides cutting-edge tools for developers and businesses to streamline their workflow." },
    { question: "Is there a free trial?", answer: "Yes, we offer a 14-day free trial with access to all premium features." },
    { question: "Can I upgrade my plan later?", answer: "Absolutely! You can upgrade or downgrade your plan at any time from your account settings." }    
]


export function FAQ() {
    return (
        <section className="py-16 bg-white dark:bg-black">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center">
                    Frequently Asked Questions
                </h2>
                <div className="mt-8 max-w-2xl mx-auto">
                    <Accordion type="single" collapsible>
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`faq-${index}`} className="border-b border-gray-300 dark:border-gray-700">
                                <AccordionTrigger className="text-lg font-medium py-3 hover:text-primary transition-all">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-[18px]">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}