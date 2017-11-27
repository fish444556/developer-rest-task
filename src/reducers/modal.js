import { HANDLEMODAL } from '../actions/const';

const modal = {
	visibility: false,
	data: []
}

export default function (state = modal, action) {
	switch(action.type) {
		case HANDLEMODAL:
			return modalOpen = {
				visibility: true,
				data: action.payload.data
			}
		default:
			return modal;
	}
}