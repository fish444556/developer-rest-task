import { HANDLEMODAL } from '../../const';

export function handleModal(value) {
	return {
		type: HANDLEMODAL,
		payload: value
	};
}