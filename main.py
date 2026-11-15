import os
import json
import hashlib
import secrets

from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
from kivy.uix.button import Button
from kivy.uix.textinput import TextInput
from kivy.core.window import Window

Window.clearcolor = (0.04, 0.10, 0.08, 1)

class WhatsAppGuard(App):

    def build(self):
        self.file = os.path.join(
            self.user_data_dir,
            "security.json"
        )

        self.layout = BoxLayout(
            orientation="vertical",
            padding=25,
            spacing=15
        )

        self.layout.add_widget(Label(
            text="🛡 WhatsApp Guard",
            font_size=28
        ))

        self.password = TextInput(
            hint_text="Enter password",
            password=True,
            multiline=False,
            size_hint=(1, 0.15)
        )

        self.message = Label(text="")

        self.button = Button(
            text="Set Password",
            size_hint=(1, 0.18)
        )

        self.button.bind(on_press=self.check_password)

        self.layout.add_widget(self.password)
        self.layout.add_widget(self.button)
        self.layout.add_widget(self.message)

        self.saved = os.path.exists(self.file)

        if self.saved:
            self.button.text = "Unlock"

        return self.layout

    def save_password(self, password):
        salt = secrets.token_bytes(16)

        hashed = hashlib.pbkdf2_hmac(
            "sha256",
            password.encode(),
            salt,
            600000
        )

        data = {
            "salt": salt.hex(),
            "hash": hashed.hex()
        }

        with open(self.file, "w") as f:
            json.dump(data, f)

    def verify_password(self, password):
        with open(self.file, "r") as f:
            data = json.load(f)

        salt = bytes.fromhex(data["salt"])

        hashed = hashlib.pbkdf2_hmac(
            "sha256",
            password.encode(),
            salt,
            600000
        )

        return secrets.compare_digest(
            hashed.hex(),
            data["hash"]
        )

    def check_password(self, instance):
        value = self.password.text

        if len(value) < 6:
            self.message.text = "Minimum 6 characters!"
            return

        if self.saved:
            if self.verify_password(value):
                self.message.text = "Password correct!"
            else:
                self.message.text = "Wrong password!"
        else:
            self.save_password(value)
            self.saved = True
            self.button.text = "Unlock"
            self.message.text = "Password saved successfully!"

WhatsAppGuard().run()from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
from kivy.uix.button import Button
from kivy.uix.textinput import TextInput
from kivy.core.window import Window

Window.clearcolor = (0.04, 0.10, 0.08, 1)

class WhatsAppGuard(App):

    def build(self):
        self.layout = BoxLayout(
            orientation='vertical',
            padding=25,
            spacing=15
        )

        self.title = Label(
            text='🛡 WhatsApp Guard',
            font_size=28
        )

        self.password = TextInput(
            hint_text='Enter your password',
            password=True,
            multiline=False,
            size_hint=(1, 0.15)
        )

        self.message = Label(text='Create your security password')

        self.button = Button(
            text='Set Password',
            size_hint=(1, 0.18)
        )
        self.button.bind(on_press=self.check_password)

        self.layout.add_widget(self.title)
        self.layout.add_widget(self.password)
        self.layout.add_widget(self.button)
        self.layout.add_widget(self.message)

        return self.layout

    def check_password(self, instance):
        value = self.password.text

        if len(value) < 6:
            self.message.text = 'Password must be 6 characters!'
            return

        self.message.text = 'Password created successfully!'
        self.button.text = 'Password Ready'

WhatsAppGuard().run()
