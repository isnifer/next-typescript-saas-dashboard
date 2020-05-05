import React, { Fragment, useState } from 'react'
import Logo from '@/components/Logo'
import { TextField, Checkbox, PrimaryButton } from '@fluentui/react'
import { useImmer } from 'use-immer'
import styled from 'styled-components'

enum FormStates {
  SIGNUP = 'SIGNUP',
  SIGNIN = 'SIGNIN',
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 960px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

const SliderContainer = styled.div`
  display: none;

  @media (min-width: 960px) {
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    background-color: #0080ff;
    padding: 0 100px;
  }
`

const FormParent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 30px 20px 20px;
  height: 100vh;

  @media (min-height: 569px) {
    padding: 50px 20px 40px;
  }

  @media (min-width: 960px) {
    flex: 3;
    padding: 0 40px;
    max-width: 600px;
  }
`

const FormContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 960px) {
    flex-grow: 0.6;
    width: 320px;
    padding: 0 0 40px;
  }
`

const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
  color: #242f57;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const FooterText = styled.div`
  font-size: 14px;
  color: #242f57;
  text-align: center;
`

const PseudoLink = styled.span`
  color: #369afe;
  cursor: pointer;
`

const ForgotPassword = styled.div`
  font-size: 14px;
  text-align: right;
`

const GalleryTopLeftShadow = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    background-color: #0075e8;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    width: 337px;
    height: 327px;
    position: absolute;
    left: -42px;
    top: -42px;
    z-index: 2;
  }
`

const GalleryBottomRightShadow = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    background-color: #1788f8;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    width: 114px;
    height: 121px;
    position: absolute;
    right: -35px;
    bottom: -32px;
    z-index: 2;
  }
`

const GalleryImages = styled.div`
  position: relative;
`

const GalleryImageItem = styled.img`
  width: 517px;
  position: relative;
  z-index: 3;
`

const GalleryTitle = styled.div`
  font-family: Heebo;
  font-size: 26px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 80px;
  text-align: center;
`

const GallerySubtitle = styled.div`
  font-family: Heebo;
  font-size: 14px;
  color: #ffffff;
  margin-top: 12px;
  text-align: center;
`

const GallerySwitcher = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`

const GallerySwitcherItem = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  margin-left: 9px;
  background-color: ${props => (props.active ? 'white' : 'rgba(255, 255, 255, .45)')};
  cursor: ${props => (props.active ? 'default' : 'pointer')};

  &:first-child {
    margin-left: 0;
  }
`

export default function Login() {
  const [formState, setFormState] = useState(FormStates.SIGNIN)
  const [form, updateForm] = useImmer({})

  function handleChange(name: string, value: string | boolean) {
    updateForm(draft => {
      draft[name] = value
    })
  }

  return (
    <Container>
      <FormParent>
        <FormContainer>
          <div>
            <Logo />
            <Title>{formState === FormStates.SIGNUP ? 'Create Account' : 'Welcome Back!'}</Title>
            {formState === FormStates.SIGNUP && (
              <Fragment>
                <TextField
                  required
                  name="name"
                  label="YOUR NAME"
                  onChange={(_, nextValue) => handleChange('name', nextValue)}
                />
                <br />
              </Fragment>
            )}
            <TextField
              required
              type="email"
              name="email"
              label="EMAIL"
              onChange={(_, nextValue) => handleChange('email', nextValue)}
            />
            <br />
            <TextField
              required
              type="password"
              name="password"
              label="PASSWORD"
              onChange={(_, nextValue) => handleChange('password', nextValue)}
            />
            <br />
            {formState === FormStates.SIGNUP && (
              <Fragment>
                <TextField
                  required
                  type="password"
                  name="confirmPassword"
                  label="CONFIRM PASSWORD"
                  onChange={(_, nextValue) => handleChange('confirmPassword', nextValue)}
                />
                <br />
              </Fragment>
            )}
            {formState === FormStates.SIGNIN && (
              <Fragment>
                <Checkbox
                  name="rememberMe"
                  label="Remember me"
                  onChange={(_, nextValue) => handleChange('rememberMe', nextValue)}
                />
                <br />
              </Fragment>
            )}
            <ButtonContainer>
              <PrimaryButton>SIGN {formState === FormStates.SIGNUP ? 'UP' : 'IN'}</PrimaryButton>
            </ButtonContainer>
            <br />
            {formState === FormStates.SIGNIN && (
              <ForgotPassword>
                <a href="/">Forgot Password?</a>
              </ForgotPassword>
            )}
            {formState === FormStates.SIGNUP && (
              <Fragment>
                <FooterText>
                  By clicking Sign Up, you agree to our <a href="/">Terms</a>,{' '}
                  <a href="/">Data Policy</a> and <a href="/">Cookie Policy</a>.
                </FooterText>
                <br />
              </Fragment>
            )}
          </div>
          <div>
            {formState === FormStates.SIGNUP ? (
              <FooterText>
                Already have account?{' '}
                <PseudoLink onClick={() => setFormState(FormStates.SIGNIN)}>Sign in</PseudoLink>.
              </FooterText>
            ) : (
              <FooterText>
                Don't have account?{' '}
                <PseudoLink onClick={() => setFormState(FormStates.SIGNUP)}>Register</PseudoLink>.
              </FooterText>
            )}
          </div>
        </FormContainer>
      </FormParent>
      <SliderContainer>
        <div>
          <GalleryImages>
            <GalleryTopLeftShadow />
            <GalleryImageItem
              srcset="/dashboard_main@2x.png 2x"
              src="/dashboard_main.png"
              alt="SaaSdunk"
            />
            <GalleryBottomRightShadow />
          </GalleryImages>
          <GalleryTitle>Connect and manage with your team!</GalleryTitle>
          <GallerySubtitle>
            Aziest Jordan is one of the biggest superstars to have immerged <br />
            from the professional designer in world.
          </GallerySubtitle>
          <GallerySwitcher>
            <GallerySwitcherItem />
            <GallerySwitcherItem active />
            <GallerySwitcherItem />
            <GallerySwitcherItem />
            <GallerySwitcherItem />
            <GallerySwitcherItem />
          </GallerySwitcher>
        </div>
      </SliderContainer>
    </Container>
  )
}
