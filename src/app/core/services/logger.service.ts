import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private sessionId = 'sample-session-id'; // Replace with actual session ID logic

  // constructor() {}

  private formatLog(
    level: string,
    severity: string,
    tracebackId: string,
    screenName: string,
    source: string,
    deviceInfo: string,
    data: string,
    message: string,
    stackTrace = '',
    timestamp = '',
  ): string {
    return JSON.stringify({
      timestamp,
      level,
      tracebackId,
      severity,
      sessionId: this.sessionId,
      screenName,
      source,
      deviceInfo,
      data,
      message,
      stackTrace,
    });
  }

  log(
    level: string,
    severity: string,
    tracebackId: string,
    screenName: string,
    source: string,
    deviceInfo: string,
    data: string,
    message: string,
    stackTrace?: string,
    timestamp?: string,
  ): void {
    const currentTimestamp = timestamp || new Date().toISOString();
    const formattedLog = this.formatLog(
      level,
      severity,
      tracebackId,
      screenName,
      source,
      deviceInfo,
      data,
      message,
      stackTrace || '',
      timestamp || currentTimestamp,
    );
    // eslint-disable-next-line no-console
    console.log(formattedLog);
  }

  // Additional methods for different log levels
  info(
    severity: string,
    tracebackId: string,
    screenName: string,
    source: string,
    deviceInfo: string,
    data: string,
    message: string,
    stackTrace?: string,
  ): void {
    this.log(
      'INFO',
      severity || 'LOW',
      tracebackId,
      screenName,
      source,
      deviceInfo,
      data,
      message,
      stackTrace,
    );
  }

  warn(
    severity: string,
    tracebackId: string,
    screenName: string,
    source: string,
    deviceInfo: string,
    data: string,
    message: string,
    stackTrace?: string,
  ): void {
    this.log(
      'WARN',
      severity || 'LOW',
      tracebackId,
      screenName,
      source,
      deviceInfo,
      data,
      message,
      stackTrace,
    );
  }

  error(
    severity: string,
    tracebackId: string,
    screenName: string,
    source: string,
    deviceInfo: string,
    data: string,
    message: string,
    stackTrace?: string,
  ): void {
    this.log(
      'ERROR',
      severity || 'MEDIUM',
      tracebackId,
      screenName,
      source,
      deviceInfo,
      data,
      message,
      stackTrace,
    );
  }

  fatal(
    severity: string,
    tracebackId: string,
    screenName: string,
    source: string,
    deviceInfo: string,
    data: string,
    message: string,
    stackTrace?: string,
  ): void {
    this.log(
      'FATAL',
      severity || 'HIGH',
      tracebackId,
      screenName,
      source,
      deviceInfo,
      data,
      message,
      stackTrace,
    );
  }
}
