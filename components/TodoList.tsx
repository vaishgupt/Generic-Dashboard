"use client";

import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "./ui/checkbox";
import { Card } from "./ui/card";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from "./ui/button";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar"

const TodoList=()=>{
  const [date, setDate] = React.useState<Date | undefined>(new Date())
 
  const [open, setOpen] = useState(false);

return(
  <div>

    <Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    
     <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button></PopoverTrigger>
  <PopoverContent>
     <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border"
  />
  </PopoverContent>
</Popover>

    <CalendarIcon />
  <ScrollArea className="max-h-[400px] m-4 overflow-y-auto">
   
   <Card className="p-4">
    <div className="flex items-center gap-4">
    <Checkbox id="item1" checked />
    <label htmlFor="item1" className="text-sm text-muted-foreground">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </label>
    </div>
   </Card>

   <Card className="p-4">
    <div className="flex items-center gap-4">
    <Checkbox id="item1" checked />
    <label htmlFor="item1" className="text-sm text-muted-foreground">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </label>
    </div>
   </Card>

   <Card className="p-4">
    <div className="flex items-center gap-4">
    <Checkbox id="item1" checked />
    <label htmlFor="item1" className="text-sm text-muted-foreground">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </label>
    </div>
   </Card>

   <Card className="p-4">
    <div className="flex items-center gap-4">
    <Checkbox id="item1" checked />
    <label htmlFor="item1" className="text-sm text-muted-foreground">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </label>
    </div>
   </Card>

   <Card className="p-4">
    <div className="flex items-center gap-4">
    <Checkbox id="item1" checked />
    <label htmlFor="item1" className="text-sm text-muted-foreground">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </label>
    </div>
   </Card>

   <Card className="p-4">
    <div className="flex items-center gap-4">
    <Checkbox id="item1" checked />
    <label htmlFor="item1" className="text-sm text-muted-foreground">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </label>
    </div>
   </Card>

   <Card className="p-4">
    <div className="flex items-center gap-4">
    <Checkbox id="item1" checked />
    <label htmlFor="item1" className="text-sm text-muted-foreground">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </label>
    </div>
   </Card>

   <Card className="p-4">
    <div className="flex items-center gap-4">
    <Checkbox id="item1" checked />
    <label htmlFor="item1" className="text-sm text-muted-foreground">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </label>
    </div>
   </Card>

   <Card className="p-4">
    <div className="flex items-center gap-4">
    <Checkbox id="item1" checked />
    <label htmlFor="item1" className="text-sm text-muted-foreground">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </label>
    </div>
   </Card>

   <Card className="p-4">
    <div className="flex items-center gap-4">
    <Checkbox id="item1" checked />
    <label htmlFor="item1" className="text-sm text-muted-foreground">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </label>
    </div>
   </Card>

   <Card className="p-4">
    <div className="flex items-center gap-4">
    <Checkbox id="item1" checked />
    <label htmlFor="item1" className="text-sm text-muted-foreground">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </label>
    </div>
   </Card>

   <Card className="p-4">
    <div className="flex items-center gap-4">
    <Checkbox id="item1" checked />
    <label htmlFor="item1" className="text-sm text-muted-foreground">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </label>
    </div>
   </Card>

   <Card className="p-4">
    <div className="flex items-center gap-4">
    <Checkbox id="item1" checked />
    <label htmlFor="item1" className="text-sm text-muted-foreground">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </label>
    </div>
   </Card>

   <Card className="p-4">
    <div className="flex items-center gap-4">
    <Checkbox id="item1" checked />
    <label htmlFor="item1" className="text-sm text-muted-foreground">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </label>
    </div>
   </Card>


   <Card className="p-4">
    <div className="flex items-center gap-4">
    <Checkbox id="item1" checked />
    <label htmlFor="item1" className="text-sm text-muted-foreground">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </label>
    </div>
   </Card>

   <Card className="p-4">
    <div className="flex items-center gap-4">
    <Checkbox id="item1" checked />
    <label htmlFor="item1" className="text-sm text-muted-foreground">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </label>
    </div>
   </Card>

</ScrollArea>

</div>
)

}

export default TodoList;