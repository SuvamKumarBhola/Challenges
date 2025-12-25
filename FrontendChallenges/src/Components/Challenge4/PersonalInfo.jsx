import React, { useState } from 'react';
import { User, MapPin, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

// PersonalInfo Component
function PersonalInfo({ formData, handleChange }) {
    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                </label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                </label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
            </div>
        </div>
    );
}