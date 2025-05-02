import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProfileTab({ userDetails }) {
  if (!userDetails) {
    return (
      <div className="bg-[#1a2235] rounded-lg p-6">
        <p className="text-gray-400">No user details available.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#1a2235] rounded-lg p-6">
      <div className="space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm">
            Name
          </label>
          <Input
            id="name"
            defaultValue={userDetails.name || "N/A"}
            className="bg-[#1a2235] border-gray-700 text-white"
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm">
            Email
          </label>
          <Input
            id="email"
            type="email"
            defaultValue={userDetails.email || "N/A"}
            className="bg-[#1a2235] border-gray-700 text-white"
          />
        </div>

        {/* Phone Field */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm">
            Phone
          </label>
          <Input
            id="phone"
            defaultValue={userDetails.phone || "N/A"}
            className="bg-[#1a2235] border-gray-700 text-white"
          />
        </div>

        {/* Save Changes Button */}
        <Button className="w-full bg-white text-black hover:bg-gray-200">Save Changes</Button>
      </div>
    </div>
  );
}
