namespace $.$$ {
	export class $gen_app_item extends $.$gen_app_item {

		types_map( type: string ) {
			const types = {
				skill: 'Навык',
				weapon: 'Оружие',
				armor: 'Броня',
			}
			return types[ type as keyof typeof types ] || type + '?'
		}

		type() {
			return this.types_map( this.item().type )
		}

		name() {
			return this.item().name
		}

		description(): string {
			return this.item().level ? `Ур. ${ this.item().level }` : ''
		}

		modes_list(): readonly any[] {
			const modes = ( this.item()?.modes || [] ) as { id: string, name: string }[]
			console.log( modes )
			return modes?.map( mode => this.Mode( mode.id ) )
		}

		get_mode( id: string ) {
			const modes = ( this.item()?.modes || [] ) as { id: string, name: string }[]
			return modes.find( mode => mode.id === id )
		}

		mode_name( id: any ): string {
			console.log( this.get_mode( id ) )
			return "Мод: " + this.get_mode( id )?.name
		}

	}
}
