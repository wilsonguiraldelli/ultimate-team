import React from 'react';

import { SafeAreaView, ScrollView } from 'react-native';
import { Header, Field, Dropdown } from 'common/components';
import { Formik, FormikProps } from 'formik';

import { Props, validationSchema } from './types';
import { getStyles } from './styles';
import { Button, Column } from 'native-base';
import { PaymentMethods, Player, Position } from 'players/types';
import * as ramda from 'ramda';

function FormScreen(props: Props) {
  const styles = getStyles();

  const orderList = ramda
    .range(1, props.playersListSize + 1)
    .map(item => ({
      label: String(item),
      value: item
    }))

    console.log('ORDER LIST', orderList);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Adicionar jogador"
        leftIcon="arrow-back"
        onPressLeftIcon={props.onGoBack}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <Formik
          initialValues={props.initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => props.onSubmit(values)}
        >
          {(formik: FormikProps<Player>) => (
            <Column flex={1} justifyContent="space-between">
              <Column space={4}>
                <Dropdown
                  label="Ordem"
                  options={orderList}
                  onChange={formik.handleChange('order')}
                  value={formik.values.order}
                  error={formik.touched?.order && formik.errors?.order}
                  onBlur={() => formik.setFieldTouched('order')}
                />
                <Field
                  label="Nome e sobrenome"
                  placeholder="Nome da fera"
                  onChange={formik.handleChange('name') as any}
                  onBlur={formik.handleBlur('name')}
                  value={formik.values.name}
                  autoCapitalize="words"
                  error={formik.touched?.name && formik.errors?.name}
                />
                <Field
                  label="Apelido"
                  placeholder="Mais conhecido como..."
                  onChange={formik.handleChange('nickname') as any}
                  onBlur={formik.handleBlur('nickname')}
                  value={formik.values.nickname}
                  autoCapitalize="words"
                  error={formik.touched?.nickname && formik.errors?.nickname}
                />
                <Field
                  label="Celular"
                  placeholder="Contato para negociações"
                  onChange={formik.handleChange('phone') as any}
                  onBlur={formik.handleBlur('phone')}
                  value={formik.values.phone}
                  error={formik.touched?.phone && formik.errors?.phone}
                  mask="cel-phone"
                  keyboardType="phone-pad"
                />
                <Dropdown
                  label="Posição"
                  placeholder="Joga onde ?"
                  options={Position}
                  onChange={formik.handleChange('position')}
                  value={formik.values.position}
                  error={formik.touched?.position && formik.errors?.position}
                  onBlur={() => formik.setFieldTouched('position')}
                />
                <Dropdown
                  label="Pagamento"
                  placeholder="Faz me rir"
                  options={PaymentMethods}
                  onChange={formik.handleChange('payment')}
                  value={formik.values.payment}
                  error={formik.touched?.payment && formik.errors?.payment}
                  onBlur={() => formik.setFieldTouched('payment')}
                />
              </Column>
              <Button onPress={() => formik.handleSubmit()}>Salvar</Button>
            </Column>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}

export default FormScreen;
