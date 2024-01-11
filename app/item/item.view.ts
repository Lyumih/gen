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

	}
}
