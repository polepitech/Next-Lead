import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Fugaz_One } from 'next/font/google'
const fuzz = Fugaz_One({
  weight: '400',
  subsets: ['latin'],
})
 

export default function Home() {
  return (
    <div className={fuzz.className}>
    </div>
  );
}