// React
import React from "react";

// Shadcn
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactCard() {
  return (
    <div className="space-y-5">
      <Card className="md:w-[550px] lg:w-[350px]">
        <CardHeader>
          <CardTitle>Call us</CardTitle>
        </CardHeader>
        <CardContent>
          <p>We are 24/7 available!</p>
          <p>Hotline: (+503) 2222-3333</p>{" "}
        </CardContent>
      </Card>

      <Card className="md:w-[550px] lg:w-[350px]">
        <CardHeader>
          <CardTitle>Write us</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Via contact form or email.</p>
          <p>Email: sat.nak@satsch.com</p>
        </CardContent>
      </Card>
      <Card className="md:w-[550px] lg:w-[350px]">
        <CardHeader>
          <CardTitle>Visit us</CardTitle>
        </CardHeader>
        <CardContent>
          <p>25 Avenida Norte,</p>
          <p>San Salvador,</p>
          <p>El Salvador</p>
        </CardContent>
      </Card>
    </div>
  );
}
