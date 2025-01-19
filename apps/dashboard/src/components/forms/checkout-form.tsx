"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  surname: z.string().min(2, {
    message: "Last name must be at least 2 characters",
  }),
  country: z.string(),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  phone: z.string(),
  shippingMethod: z.enum(["free", "next"]),
  paymentMethod: z.enum(["card", "afterpay", "affirm", "klarna"]),
  saveInfo: z.boolean().default(false),
});

export function CheckoutForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      surname: "",
      country: "US",
      address: "",
      phone: "",
      shippingMethod: "free",
      paymentMethod: "card",
      saveInfo: false,
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log(data);
      toast("You submitted the following values:", {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }, 3000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Accordion
          type="single"
          defaultValue="shipping-info"
          collapsible
          className="space-y-2"
        >
          <AccordionItem value="shipping-info" className="border-none">
            <AccordionTrigger className="py-4 text-xl font-semibold hover:no-underline">
              Shipping Information
            </AccordionTrigger>
            <AccordionContent className="space-y-4 px-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="lost@space.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="surname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="US">United States</SelectItem>
                        <SelectItem value="CA">Canada</SelectItem>
                        <SelectItem value="GB">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123 Main St, Springfield, IL 62701"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+34 691 43 29 57"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="shipping-method" className="border-none">
            <AccordionTrigger className="py-4 text-xl font-semibold hover:no-underline">
              Shipping Method
            </AccordionTrigger>
            <AccordionContent className="px-2">
              <FormField
                control={form.control}
                name="shippingMethod"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="space-y-3"
                      >
                        <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
                          <div className="group flex items-center space-x-2">
                            <RadioGroupItem value="free" id="free" />
                            <FormLabel
                              htmlFor="free"
                              className="font-medium hover:cursor-pointer"
                            >
                              Free shipping
                            </FormLabel>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            5-7 business days
                          </div>
                          <div className="font-medium">Free</div>
                        </div>
                        <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
                          <div className="group flex items-center space-x-2">
                            <RadioGroupItem value="next" id="next" />
                            <FormLabel
                              htmlFor="next"
                              className="font-medium hover:cursor-pointer"
                            >
                              Next day air
                            </FormLabel>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            At most 1 business day
                          </div>
                          <div className="font-medium">$15.00</div>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="payment-method" className="border-none">
            <AccordionTrigger className="py-4 text-xl font-semibold hover:no-underline">
              Payment Method
            </AccordionTrigger>
            <AccordionContent className="px-2">
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-2 rounded-lg border p-4">
                          <RadioGroupItem value="card" id="card" />
                          <FormLabel htmlFor="card" className="font-medium">
                            Card
                          </FormLabel>
                        </div>
                        <div className="flex items-center space-x-2 rounded-lg border p-4">
                          <RadioGroupItem value="afterpay" id="afterpay" />
                          <FormLabel htmlFor="afterpay" className="font-medium">
                            Afterpay
                          </FormLabel>
                        </div>
                        <div className="flex items-center space-x-2 rounded-lg border p-4">
                          <RadioGroupItem value="affirm" id="affirm" />
                          <FormLabel htmlFor="affirm" className="font-medium">
                            Affirm
                          </FormLabel>
                        </div>
                        <div className="flex items-center space-x-2 rounded-lg border p-4">
                          <RadioGroupItem value="klarna" id="klarna" />
                          <FormLabel htmlFor="klarna" className="font-medium">
                            Klarna
                          </FormLabel>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <FormField
          control={form.control}
          name="saveInfo"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="group space-y-1 leading-none">
                <FormLabel className="hover:cursor-pointer">
                  Save my info for 1-click checkout for further purchases
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full text-base font-semibold"
          size="lg"
        >
          Pay
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        By clicking Pay, you agree to the Link{" "}
        <Link href="/terms" className="underline decoration-dotted">
          Terms
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="underline decoration-dotted">
          Privacy
        </Link>{" "}
        Policy
      </p>
      <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center">
          Powered by
          <a href="https://strapex.org/" className="hover:cursor-pointer">
            <img
              src="/strapex-black.png"
              alt="checkout"
              className="ml-2 h-[22px] w-[50px] pt-0.5"
            />
          </a>
        </span>
        <span>|</span>
        <Link href="#" className="hover:text-gray-900 hover:underline">
          Legal
        </Link>
        <span>|</span>
        <Link href="#" className="hover:text-gray-900 hover:underline">
          Contact
        </Link>
      </div>
    </Form>
  );
}
