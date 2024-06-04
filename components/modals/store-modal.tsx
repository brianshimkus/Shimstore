'use client'

import { useStoreModal } from '@/hooks/use-store-modal'
import { Modal } from '@/components/ui/modal'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
	name: z.string().min(1),
})

export const StoreModal = () => {
	const storeModal = useStoreModal()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
		},
	})

	return (
		<Modal
			title='Create store'
			description='Add a new store to manage products'
			isOpen={storeModal.isOpen}
			onClose={storeModal.onClose}>
			<div>Create Store Form</div>
		</Modal>
	)
}
