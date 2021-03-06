import React from 'react';

import { SafeAreaView, ScrollView } from 'react-native';
import { Header, Field, Dropdown } from 'common/components';
import { Formik, FormikProps } from 'formik';

import { FormProps, Props, validationSchema } from './types';
import { getStyles } from './styles';
import { Button, Column } from 'native-base';
import { PaymentMethods, Position } from 'players/types';
import * as ramda from 'ramda';

function FormScreen(props: Props) {
  const styles = getStyles();

  const orderList = ramda
    .range(1, props.playersListSize + 1)
    .map(item => ({
      label: String(item),
      value: String(item)
    }))

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
          {(formik: FormikProps<FormProps>) => (
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
                  label="Nome / Apelido"
                  placeholder="Mais conhecido como..."
                  onChange={formik.handleChange('name_nickename') as any}
                  onBlur={formik.handleBlur('name_nickename')}
                  value={formik.values.name_nickename}
                  autoCapitalize="words"
                  error={formik.touched?.name_nickename && formik.errors?.name_nickename}
                />
                <Field
                  label="Celular"
                  placeholder="Contato para negocia????es"
                  onChange={formik.handleChange('phone') as any}
                  onBlur={formik.handleBlur('phone')}
                  value={formik.values.phone}
                  error={formik.touched?.phone && formik.errors?.phone}
                  mask="cel-phone"
                  keyboardType="phone-pad"
                />
                <Dropdown
                  label="Posi????o"
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
