import { PlayerForm, PlayerProps } from 'players/types';
import * as Yup from 'yup';

export type Props = {
    onGoBack: () => void,
    initialValues: PlayerForm,
    onSubmit: (player: PlayerForm) => void,
    playersListSize: number,
}

export const validationSchema: Yup.SchemaOf<PlayerProps> = Yup.object().shape({
    name_nickename: Yup.string()
        .required('Por favor, informe o nome do jogador')
        .trim()
        .max(255, 'Numero maximo de 255 caracteres atingido'),
    position: Yup.string()
        .trim(),
    payment: Yup.string()
        .required('Selecione o metodo de pagamento')
        .trim()
        .max(255, 'Numero maximo de 255 caracteres atingido'),
}).defined();

