::
:: Copyright (c) 2016 Keonn Technologies S.L.
:: 
:: THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
:: IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
:: FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
:: AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
:: LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
:: OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
:: THE SOFTWARE.
::

@echo off
set AGENT_HOME=%CD%\..
set AGENT_DEPLOY=%AGENT_HOME%\conf
set AGENT_ID=trasluz.pilot
set WORK_ENV=dev
set KEONN_COMP=agent
set DEPLOY_OPTS=-DLOG_LEVEL=info -Dcom.keonn.core.SimulatorMode=true -Dlogback.configurationFile="%AGENT_DEPLOY%\META-INF\logback.xml" -Dcom.keonn.system.defs=server,adrd-150-series,adrd-200-series,adrd-20-series -DKEONNBASE="%AGENT_HOME%" -DKEONNDEPLOY="%AGENT_DEPLOY%" -DAGENT_ID=%AGENT_ID% -DWORK_ENV=%WORK_ENV% -DKEONN_COMP=%KEONN_COMP%

setlocal ENABLEDELAYEDEXPANSION
if defined CLASSPATH (set CLASSPATH12=.;"%CLASSPATH%") else (set CLASSPATH12=.)
for /R "%AGENT_HOME%\lib" %%G IN (*.jar) DO set CLASSPATH12=!CLASSPATH12!;%%G
set CLASSPATH=%CLASSPATH12%

rem echo CLASSPATH=%CLASSPATH%
rem echo DEPLOY_OPTS=%DEPLOY_OPTS%

set COMM=java %DEPLOY_OPTS% com.keonn.agent.Start
%COMM%
