namespace $ {
	/**
	 * Основной класс для создания различных предметов (умения, предметы и т.д.)
	 */
	export class $gen_engine_item extends $mol_object {

		/** Корневой идентификатор умения в глобальной базе данных */
		@$mol_mem
		id_root( next?: string ) {
			return next ?? $mol_guid()
		}

		@$mol_mem
		id( next?: string ) {
			return next ?? $mol_guid()
		}

		/** Источник вдохновения */
		@$mol_mem
		reference( next?: string ) {
			return next ?? 'Gen'
		}


		@$mol_mem
		type( next?: string ) {
			return next ?? 'item'
		}

		@$mol_mem
		part( next?: string ) {
			return next ?? 'part'
		}

		@$mol_mem
		name( next?: string ) {
			console.log( 'name', next )
			return next ?? 'no name'
		}

		@$mol_mem
		description( next?: string ) {
			console.log( 'description', next )
			return next ?? 'no description'
		}

		@$mol_mem
		level( next?: number ) {
			return next ?? 0
		}
	}
}
