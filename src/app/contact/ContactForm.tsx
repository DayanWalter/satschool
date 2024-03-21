"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export default function ContactForm() {
  const formSchema = z.object({
    username: z
      .string()
      .min(2, {
        message: "Name must be at least 2 characters.",
      })
      .max(50, {
        message: "Name must not be longer than 50 characters.",
      }),
    useremail: z.string().email().min(5, {
      message: "Email must be at least 5 characters.",
    }),
    usermessage: z
      .string()
      .min(10, {
        message: "Message must be at least 10 characters.",
      })
      .max(160, {
        message: "Message must not be longer than 160 characters.",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      useremail: "",
      usermessage: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset();
    toast({
      title: "You submitted successfully your message",
      description: "We will reach out to you within the next 24 hours.",
    });
    // Real implementation:
    // emailjs
    //   .send("service_2n1b8f9", "template_chhw3en", values, {
    //     publicKey: "N21MnRLlPBPVc0mQf",
    //   })
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //       form.reset();
    //       toast({
    //         title: "You submitted successfully your message",
    //         description: "We will reach out to you within the next 24 hours.",
    //       });
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //       toast({
    //         variant: "destructive",
    //         title: "Uh oh! Something went wrong.",
    //         description: "There was a problem with your request.",
    //       });
    //     },
    //   );
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Satoshi Nakamoto" {...field} />
                </FormControl>
                <FormDescription>This is your name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="useremail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@mail.com" {...field} />
                </FormControl>
                <FormDescription>This is your email adress.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="usermessage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="How can we help you?"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your message for us.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
