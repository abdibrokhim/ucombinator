import Image from "next/image"
import Link from "next/link"

const LOGO_URL = '/next.svg'

export const Logo = () => {
    return (
        <Link href="/">
            <Image 
                src={LOGO_URL} 
                alt="Ucombinator" 
                width={32} 
                height={32} 
                className="w-1/3 h-1/3"
                priority
              />
        </Link>
    )
}