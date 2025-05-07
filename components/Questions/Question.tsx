import React from 'react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from "@/components/ui/slider"

interface QuestionProps {
  titre: string;
  description?: string;
  type: 'text' | 'radio' | 'checkbox' | 'select' | 'range';
  name: string;
  Choix1?: string;
  Choix2?: string;
  Choix3?: string;
  Choix4?: string;
}

export const Question: React.FC<QuestionProps> = ({ titre,description, name, type, Choix1, Choix2, Choix3, Choix4 }) => {
  return (
    <Card className="question bg-white text-black w-[50vw] m-10">
      <p className="text-xl text-center text-bold font-black p-4">{titre}</p>
      <p className="text-lg text-center text-bold font-black p-4">{description}</p>

      {/* TEXT INPUT */}
      {type === 'text' && (
        <Input type="text" name={name} className="border-2 border-gray-300 rounded-md p-2 m-4" />
      )}

      {/* RADIO */}
      {type === 'radio' && (
        <RadioGroup className="space-y-2 flex w-full justify-around items-center">
          <div className="flex items-center space-x-2">
            <RadioGroupItem id={`${name}-1`} value={Choix1||''}  />
            <label htmlFor={`${name}-1`} className="text-sm text-gray-700">
              {Choix1}
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem id={`${name}-2`} value={Choix2||''} />
            <label htmlFor={`${name}-2`} className="text-sm text-gray-700">
              {Choix2}
            </label>
          </div>
          {Choix3 && (
            <div className="flex items-center space-x-2">
              <RadioGroupItem id={`${name}-3`} value={Choix3}  />
              <label htmlFor={`${name}-3`} className="text-sm text-gray-700">
                {Choix3}
              </label>
            </div>
          )}
          {Choix4 && (
            <div className="flex items-center space-x-2">
              <RadioGroupItem id={`${name}-4`} value={Choix4}/>
              <label htmlFor={`${name}-4`} className="text-sm text-gray-700">
                {Choix4}
              </label>
            </div>
          )}
        </RadioGroup>
      )}

      {/* CCHECKBOX */}
      {type === 'checkbox' && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id={`${name}-1`} name={name} value={Choix1} />
            <label htmlFor={`${name}-1`} className="text-sm text-gray-700">
              {Choix1}
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id={`${name}-2`} name={name} value={Choix2} />
            <label htmlFor={`${name}-2`} className="text-sm text-gray-700">
              {Choix2}
            </label>
          </div>
          {Choix3 && (
            <div className="flex items-center space-x-2">
              <Checkbox id={`${name}-3`} name={name} value={Choix3} />
              <label htmlFor={`${name}-3`} className="text-sm text-gray-700">
                {Choix3}
              </label>
            </div>
          )}
          {Choix4 && (
            <div className="flex items-center space-x-2">
              <Checkbox id={`${name}-4`} name={name} value={Choix4} />
              <label htmlFor={`${name}-4`} className="text-sm text-gray-700">
                {Choix4}
              </label>
            </div>
          )}
        </div>
      )}

      {/* SELECT */}
      {type === 'select' && (
        <Select>
          <SelectTrigger className="w-full bg-white border-2 border-gray-300 rounded-md p-2 m-4">
            <SelectValue placeholder="Choisissez une option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={Choix1||''}>{Choix1}</SelectItem>
            <SelectItem value={Choix2||''}>{Choix2}</SelectItem>
            {Choix3 && <SelectItem value={Choix3}>{Choix3}</SelectItem>}
            {Choix4 && <SelectItem value={Choix4}>{Choix4}</SelectItem>}
          </SelectContent>
        </Select>
      )}

      {/* RANGE */}
      {type === 'range' && (
        <Slider className='w-90 m-auto' name={name} max={100} step={1}/>
      )}

    </Card>



  );
};