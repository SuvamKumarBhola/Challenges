function Confirmation({ formData }) {
  return (
    <div className="space-y-4">
      <div className="bg-slate-50 rounded-lg p-4">
        <h3 className="font-semibold text-slate-700 mb-3">Personal Information</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500">First Name:</span>
            <span className="font-medium text-slate-800">{formData.firstName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Last Name:</span>
            <span className="font-medium text-slate-800">{formData.lastName}</span>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 rounded-lg p-4">
        <h3 className="font-semibold text-slate-700 mb-3">Address</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500">City:</span>
            <span className="font-medium text-slate-800">{formData.city}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">ZIP Code:</span>
            <span className="font-medium text-slate-800">{formData.zip}</span>
          </div>
        </div>
      </div>
    </div>
  );
}