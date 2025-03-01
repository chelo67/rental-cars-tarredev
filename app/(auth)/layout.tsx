import Image from 'next/image'

export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="h-screen w-screen"> {/* Add h-screen and w-screen here to take the full viewport */}
        <div className="grid lg:grid-cols-2 h-full items-center justify-center">
        <div className="flex items-center justify-center h-full w-full"> {/* Add h-full w-full here to center content */}
          <div className="p-4">{children}</div> {/* Add padding to the children */}
        </div>
        <div className='hidden lg:flex lg:bg-muted h-full justify-center items-center lg:flex-col'> {/* Change the background color to muted (from global.css) */}
            <Image src="/logo.svg" alt="Logo" width={80} height={80} />
            <h1 className="mt-4 text-xl font-bold">TarreCars</h1> {/* Add a top margin to the title */}
        </div>
        </div>    
    </div>
  )
}

