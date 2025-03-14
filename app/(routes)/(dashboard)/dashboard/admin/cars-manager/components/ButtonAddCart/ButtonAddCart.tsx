"use client"
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { PlusCircle } from 'lucide-react'
import {use, useState} from 'react'
import { FormAddCar } from '../FormAddCar'

export function ButtonAddCart() {
    const [openDialog, setOpenDialog] = useState(false)

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
            <Button variant="outline" onClick={() => setOpenDialog(true)}>
                Add new car
                <PlusCircle className="ml-2" />
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add New Car</DialogTitle>
                <DialogDescription>
                    Fill out the form below to add a new car to your inventory.
                </DialogDescription>
            </DialogHeader>
            <FormAddCar onClose={() => setOpenDialog(false)} />
        </DialogContent>
    </Dialog>
  )
}
