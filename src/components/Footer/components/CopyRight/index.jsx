const CopyRight = () => {
  return (
    <div className="text-center py-6 text-white font-light opacity-80 relative after:[content:''] after:bg-slate-900 after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:w-5/12 ">
        &copy; {new Date().getFullYear()} - All Rights Reserved
    </div>
  )
}

export default CopyRight