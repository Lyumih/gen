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
			return next ?? `${ this.type() }-${ this.part() }-${ $mol_guid( 4 ) }`
		}

		@$mol_mem
		config( next?: {} ) {
			return next ?? {}
		}

		@$mol_mem
		log() {

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

		@$mol_mem
		x( next?: number ) {
			return next ?? 0
		}

		@$mol_mem
		y( next?: number ) {
			return next ?? 0
		}
	}
}
