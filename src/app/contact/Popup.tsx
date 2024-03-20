export default function Popup() {
  return (
    <>
      <div className="fixed left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 transform rounded-md border bg-gray-50/10 text-center text-xl backdrop-blur-sm dark:bg-neutral-900/70">
        <div className="p-5">
          <p>Message sent</p>
          <p>Thank you!</p>
        </div>
        <div className="relative h-2 w-full ">
          <div className="animate-progress absolute left-0 top-0 h-full w-1/3 rounded-full bg-blue-500 dark:bg-neutral-400"></div>
        </div>
      </div>
    </>
  );
}
