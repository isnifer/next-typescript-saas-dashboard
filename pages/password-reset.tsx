import React, { Fragment, useState } from 'react'
import Logo from '@/components/Logo'
import { TextField, Checkbox, PrimaryButton } from '@fluentui/react'
import { useImmer } from 'use-immer'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0080ff;

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 960px) {
    padding: 0 100px;
  }
`

const FormParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100vh;

  @media (min-width: 500px) {
    justify-content: center;
    align-items: center;
    max-width: 760px;
  }
`

const TransparentContainer = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    flex-grow: 0.1;
  }
`

const FormContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 3;
  padding: 50px 20px 40px;
  background-color: #ffffff;

  @media (min-width: 500px) {
    padding: 60px 100px;
    border-radius: 10px;
    text-align: center;
  }
`

const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
  color: #242f57;

  @media (min-width: 500px) {
    text-align: center;
  }
`

const Description = styled.div`
  font-family: Heebo;
  font-size: 14px;
  color: #242f57;
`
const Fields = styled.div`
  @media (min-width: 500px) {
    text-align: left;
    padding: 0 80px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    align-items: center;
  }
`

const FooterText = styled.div`
  font-size: 14px;
  color: #242f57;
  text-align: center;
`

const FormBottomLeftShadow = styled.div`
  display: none;

  @media (min-width: 960px) {
    display: block;
    background-color: #0075e8;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    width: 195px;
    height: 195px;
    position: absolute;
    left: -65px;
    bottom: -25px;
    z-index: 2;
  }
`

const FormTopRightShadow = styled.div`
  display: none;

  @media (min-width: 960px) {
    display: block;
    background-color: #1788f8;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    width: 114px;
    height: 121px;
    position: absolute;
    top: -32px;
    right: -35px;
    z-index: 2;
  }
`

export default function Login() {
  const [form, updateForm] = useImmer({})

  function handleChange(name: string, value: string | boolean) {
    updateForm(draft => {
      draft[name] = value
    })
  }

  return (
    <Container>
      <FormParent>
        <TransparentContainer>
          <FormBottomLeftShadow />
          <FormTopRightShadow />
          <FormContainer>
            <div>
              <Logo />
              <Title>Reset Password</Title>
              <Description>
                Enter your email address you used to register.
                <br />
                We will send you an email containing your username and a link to reset your
                password.
              </Description>
              <br />
              <Fields>
                <TextField
                  required
                  type="email"
                  name="email"
                  label="EMAIL"
                  onChange={(_, nextValue) => handleChange('email', nextValue)}
                />
                <br />
                <ButtonContainer>
                  <PrimaryButton>RESET PASSWORD</PrimaryButton>
                </ButtonContainer>
              </Fields>
            </div>
            <FooterText>
              If you still need help, contact <a href="/">Saasdunk Support</a>
            </FooterText>
          </FormContainer>
        </TransparentContainer>
      </FormParent>
    </Container>
  )
}
