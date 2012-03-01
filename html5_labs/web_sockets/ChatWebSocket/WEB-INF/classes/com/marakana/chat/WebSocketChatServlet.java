package com.marakana.chat;

import java.io.IOException;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.eclipse.jetty.websocket.WebSocket;
import org.eclipse.jetty.websocket.WebSocketServlet;
/**
 * Servlet implementation class ChatWebSocket
 */
public class WebSocketChatServlet extends WebSocketServlet {
	private static final long serialVersionUID = 1L;
      
	private final Set<ChatWebSocket> _members = new CopyOnWriteArraySet();
	
    /**
     * @see WebSocketServlet#WebSocketServlet()
     */
    public WebSocketChatServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		getServletContext().getNamedDispatcher("default").forward(request,response);
	}

	@Override
	protected WebSocket doWebSocketConnect(HttpServletRequest request, String protocol) {
		// TODO Auto-generated method stub
		return new ChatWebSocket();
	}

	class ChatWebSocket implements WebSocket
    {
        Outbound _outbound;

        public void onConnect(Outbound outbound)
        {
            _outbound=outbound;
            _members.add(this);
        }
        
        public void onMessage(byte frame, byte[] data,int offset, int length)
        {}

        public void onMessage(byte frame, String data)
        {
            for (ChatWebSocket member : _members)
            {
                try
                {
                    member._outbound.sendMessage(frame,data);
                }
                catch(IOException e) {
                	
                }
            }
        }

        public void onDisconnect()
        {
            _members.remove(this);
        }

		public void onFragment(boolean arg0, byte arg1, byte[] arg2, int arg3,
				int arg4) {
			// TODO Auto-generated method stub
			
		}
    }
}
