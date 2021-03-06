#
# Copyright (c) 2016 Keonn Technologies S.L.
# 
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
#

#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "$0" )" && pwd )"
AGENT_HOME="$SCRIPT_DIR"/..
DEPLOY_DIR="$AGENT_HOME"/conf
AGENT_ID=dev.agentId
WORK_ENV=dev
KEONN_COMP=agent
LOGBACK_PATH="$DEPLOY_DIR/META-INF/logback.xml"
DEPLOY_OPTS="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=8000 -DLOG_LEVEL=info -Dcom.keonn.core.SimulatorMode=true -Dcom.keonn.system.defs=server -DKEONNBASE=$AGENT_HOME -DKEONNDEPLOY=$DEPLOY_DIR -Dlogback.configurationFile=$LOGBACK_PATH -DAGENT_ID=$AGENT_ID -DWORK_ENV=$WORK_ENV -DKEONN_COMP=$KEONN_COMP"


#---------------------------------#
# build the classpath #
#---------------------------------#
AGENT_CLASSPATH=
for i in `ls ${AGENT_HOME}/lib/*.jar`
do
  AGENT_CLASSPATH=${AGENT_CLASSPATH}:${i}
done

CLASSPATH=$CLASSPATH:$AGENT_CLASSPATH
export CLASSPATH;

DAEMON=java
DAEMON_ARGS="$DEPLOY_OPTS com.keonn.agent.Start"

$DAEMON $DAEMON_ARGS
