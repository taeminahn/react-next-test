import React, {useEffect} from 'react';
import { useForm, Controller } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import InputBoxComponent from "../component/inputBoxComponent";
import InputBoxComponent_ from "../component/inputBoxComponent_";

const ReactHookForm = () => {

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('올바른 이메일 형식이어야 합니다')
      .email('\'올바른 이메일 형식이어야 합니다\''),
    password: Yup.string().matches(
      /^[A-Za-z0-9\%\^\&\*\(\)\_\-\+\=\;\:\'\"\,\.\?]{8,20}$/,
      '문자를 8-20자 내로 입력해주세요. 문자,숫자,특수문자(!@#$제외) 를 포함해주세요.'
    ),
  })

  const formOptions = {
    resolver: yupResolver(validationSchema) ,
    mode: "onChange",
  }

  const { register, handleSubmit, control, formState, getValues, setValue, watch } =
    useForm(formOptions)
  const { errors } = formState

  const onSubmit = async () => {
    console.log(getValues("email"));
  }

  useEffect(() => {
    console.log('getValues email', getValues('email'));
    console.log('errors', errors);
  }, [watch('email')]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          이메일
          <Controller
            name="email"
            control={control}
            render={({
                       field: {onChange}
                     }) =>
              <InputBoxComponent
                type="text"
                name="email"
                placeholder="이메일을 입력해주세요."
                setValue={onChange}
                error={errors.email?.message}
              />
            }
          />
        </div>
        <div>
          패스워드
          <InputBoxComponent
            type="password"
            name="password"
            placeholder="패스워드를 입력해주세요."
            setValue={(v) => setValue('password', v)}
            error={errors.password?.message}
            reactHookFormRegister={register('password')}
          />
        </div>
        <button onClick={handleSubmit(onSubmit)} style={{backgroundColor: 'blue'}}>
          임마가 서브밋 보튼
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;