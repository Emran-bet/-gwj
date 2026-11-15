[app]

title = WhatsApp Guard
package.name = whatsappguard
package.domain = org.emranbit

source.dir = .
source.include_exts = py,png,jpg,kv,atlas

version = 1.0

requirements = python3,kivy

orientation = portrait
fullscreen = 0

icon.filename = icons/guard.png

[buildozer]

log_level = 2
warn_on_root = 1

android.api = 35
android.minapi = 23
android.archs = arm64-v8a, armeabi-v7a
android.accept_sdk_license = True
