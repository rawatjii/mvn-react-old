@echo off
setlocal enabledelayedexpansion
set i=1
for %%f in (Mobile*.webp) do (
  rename "%%f" "!i!.webp"
  set /a i+=1
)
