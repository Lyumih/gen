namespace $.$$ {
	export class $gen_app_item extends $.$gen_app_item {

		types_map( type: string ) {
			const types = {
				skill: 'Навык',
				equipment: 'Экипировка',
				weapon: 'Оружие',
				armor: 'Броня',
			}
			return types[ type as keyof typeof types ] || ( type + '?' )
		}

		type_translate() {
			return this.types_map( this.item().type() )
		}

		@$mol_mem
		type(): string {
			return this.item().type()
		}

		@$mol_mem
		name() {
			return this.item().name() + this.item().level()
		}

		@$mol_mem
		icon() {
			return this.item().icon()
		}

		@$mol_mem
		level(): string {
			return `Ур. ${ this.item().level() }`
		}

		@$mol_mem
		description( next?: string ): string {
			// $mol_wire_solid()
			return next ?? this.item().description() ? `${ this.item().description() }` : ''
		}

		// modes_list(): readonly any[] {
		// 	const modes = ([] ) as { id: string, name: string }[]
		// 	return modes?.map( mode => this.Mode( mode.id ) )
		// }

		// get_mode( id: string ) {
		// 	const modes = ( this.item()?.modes || [] ) as { id: string, name: string }[]
		// 	return modes.find( mode => mode.id === id )
		// }

		// mode_name( id: any ): string {
		// 	return "Мод: " + this.get_mode( id )?.name
		// }

	}
}
