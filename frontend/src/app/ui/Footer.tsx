export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4 px-6 bg-main w-full text-white">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Strapex</div>
        <div className="flex flex-row items-center">
          <div className="mr-4">© 2024 Strapex</div>
          <div className="mr-4">Terms of Service</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </footer>
  )
}