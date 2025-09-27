import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { toast } from "sonner"

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile_no, setMobile_no] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("male");
  const [errors, setErrors] = useState({}); // store validation errors


  // simple validation 
  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!mobile_no.trim()) {
      newErrors.mobile_no = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(mobile_no)) {
      newErrors.mobile_no = "Enter a valid 10-digit mobile number";
    }
    if (!dob) {
      newErrors.dob = "Date of Birth is required";
    }
    if (!gender) {
      newErrors.gender = "Gender is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // valid if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // stop if invalid

    console.log("Form Submitted: ", { name, email, password, mobile_no, dob, gender });
   
    try {
      const payload = { name, email, password, mobile_no, dob, gender };
      const response = await axios.post("http://192.168.29.244:8000/create_patient", payload, {headers: { "Content-Type": "application/json" }});
      localStorage.setItem('userId',response.data._id)
      localStorage.setItem('userName',response.data.name)
      console.log("Signup Successful:", response.data);
      
      await toast.success("Signup successful")
      window.location.href = '/'

    } catch (error) {
  if (error.response) {
    // Server responded with a status outside 2xx
    toast.error(error.response.data.detail)
    console.error("Error response:", error.response);

    if (error.response.status === 400) {
      // Show the exact message from backend
      alert(error.response.data.detail || "Bad Request");
    } else {
      alert(error.response.data.detail || "Something went wrong");
    }

  } else if (error.request) {
    // Request was made but no response received
    console.error("No response:", error.request);
    alert("No response from server. Please try again.");
  } else {
    // Something else triggered the error
    console.error("Error setting up request:", error.message);
    alert("Unexpected error occurred.");
  }
}

  };

  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold text-gray-800">
            Welcome to the App
          </CardTitle>
          <p className="text-center text-gray-500 text-sm mt-1">
            Signin to continue
          </p>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="eg. Soham Mahale"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="mobile">Mobile No</Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="eg. 9876543210"
                value={mobile_no}
                onChange={(e) => setMobile_no(e.target.value)}
              />
              {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
            </div>

            {/* DOB */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input
                id="dob"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="gender">Gender</Label>
              <Select value={gender} onValueChange={(val) => setGender(val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full mt-4">
              Signup
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signin;
