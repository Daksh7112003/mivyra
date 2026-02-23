export default function AuthPage() {
  return (
    <div className="container-brand py-10">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-soft">
        <h1 className="text-2xl font-semibold">Login / Signup</h1>
        <p className="text-sm text-mutedbrown">Email-password auth with optional OTP flow.</p>
        <form className="mt-4 space-y-3">
          <input placeholder="Email" className="w-full rounded-xl border p-3" />
          <input placeholder="Password" type="password" className="w-full rounded-xl border p-3" />
          <button className="btn-primary w-full">Continue</button>
        </form>
      </div>
    </div>
  );
}
