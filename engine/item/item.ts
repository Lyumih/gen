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


		@$mol_mem
		type( next?: string ) {
			return 'item'
		}

		@$mol_mem
		name( next?: string ) {
			return next ?? 'no name'
		}

		@$mol_mem
		description( next?: string ) {
			return next ?? 'no description'
		}

		@$mol_mem
		level( next?: number ) {
			return next ?? 0
		}
	}
}
