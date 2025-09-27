import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

const Login = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const mobile_no = phone
        const payload = {
          'mobile_no': mobile_no,
          'password': password
        };
        console.log('before---------',mobile_no, password);
        try{
          const response = await axios.post("http://192.168.29.244:8000/login", payload, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          const data = await response.data
          console.log('Success----------',data);
        } catch(error){
          if(error.response){
            // Server responded with a status outside 2xx
            console.error("Error response:", error.response);
            if(error.response.status === 400){
              // Show the exact message from backend
              alert(error.response.data.detail || "Bad Request");
            } else {
              alert(error.response.data.detail || "Something went wrong");
            }
          }
          console.error(error);
        }
      };

  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold text-gray-800">
            Login to Your Account
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-4"onSubmit={handleSubmit} >

            {/* Phone No */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Phone No</Label>
              <Input id="phone" type="number" placeholder="eg. 9146856993" onChange = {(e) => {setPhone(e.target.value)}} />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password"  onChange = {(e) => {setPassword(e.target.value)}} />
            </div>



            {/* Submit */}
            <Button type="submit" className="w-full mt-4">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
