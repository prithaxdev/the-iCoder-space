import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { sileo } from "sileo";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string;

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...data }),
      });

      if (!res.ok) throw new Error();

      sileo.success({
        title: "Message sent!",
        description: "Thanks for reaching out — I'll get back to you soon.",
        position: "top-right",
      });
      reset();
    } catch {
      sileo.error({
        title: "Failed to send",
        description:
          "Something went wrong. Please try again or contact me directly.",
        position: "top-right",
      });
    }
  };

  return (
    <section className="w-full lg:max-w-2xl" id="contact">
      <SectionHeader title="Let's Connect" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Card className="border-black/10 bg-black/3 backdrop-blur-sm dark:border-white/10 dark:bg-white/3">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg text-black/80 dark:text-white/80">
              Send a message
            </CardTitle>
            <CardDescription className="text-black/45 dark:text-white/40">
              I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-4"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Input
                    type="text"
                    placeholder="Your name"
                    {...register("name")}
                    className={cn(
                      "h-11 border-black/10 bg-black/5 placeholder:text-black/30 focus-visible:border-black/30 focus-visible:ring-black/20 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-white/30 dark:focus-visible:border-white/30 dark:focus-visible:ring-white/30",
                      errors.name &&
                        "border-destructive focus-visible:ring-destructive",
                    )}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Input
                    type="email"
                    placeholder="Your email"
                    {...register("email")}
                    className={cn(
                      "h-11 border-black/10 bg-black/5 placeholder:text-black/30 focus-visible:border-black/30 focus-visible:ring-black/20 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-white/30 dark:focus-visible:border-white/30 dark:focus-visible:ring-white/30",
                      errors.email &&
                        "border-destructive focus-visible:ring-destructive",
                    )}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <Textarea
                  placeholder="Your message..."
                  rows={5}
                  {...register("message")}
                  className={cn(
                    "border-black/10 bg-black/5 placeholder:text-black/30 focus-visible:border-black/30 focus-visible:ring-black/20 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-white/30 dark:focus-visible:border-white/30 dark:focus-visible:ring-white/30",
                    errors.message &&
                      "border-destructive focus-visible:ring-destructive",
                  )}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="text-destructive text-xs">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "relative flex h-12 w-full items-center rounded-full p-1 ps-6 pe-14 text-sm font-medium",
                  "group transition-all duration-500",
                  !isSubmitting && "hover:ps-14 hover:pe-6",
                  "cursor-pointer overflow-hidden",
                  "bg-primary text-primary-foreground",
                  "disabled:cursor-not-allowed disabled:opacity-60",
                )}
              >
                <span className="relative z-10 transition-all duration-500">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                {!isSubmitting && (
                  <span className="bg-background text-foreground absolute right-1 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <Send size={14} />
                  </span>
                )}
              </button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default Contact;
